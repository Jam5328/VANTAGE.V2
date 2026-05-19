import { Router } from "express";
import { db, leadsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { SubmitLeadBody } from "@workspace/api-zod";

const router = Router();

router.post("/leads", async (req, res) => {
  const parsed = SubmitLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  try {
    const { name, email, company, clientType, message, sourcePage } = parsed.data;

    const [lead] = await db
      .insert(leadsTable)
      .values({
        name,
        email,
        company: company ?? null,
        clientType,
        message: message ?? null,
        sourcePage: sourcePage ?? null,
      })
      .returning();

    req.log.info({ leadId: lead.id, email }, "New lead submitted");

    res.status(201).json({
      id: lead.id,
      name: lead.name,
      email: lead.email,
      company: lead.company,
      clientType: lead.clientType,
      message: lead.message,
      sourcePage: lead.sourcePage,
      createdAt: lead.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to submit lead");
    res.status(500).json({ error: "Failed to submit lead" });
  }
});

router.get("/leads", async (req, res) => {
  try {
    const leads = await db
      .select()
      .from(leadsTable)
      .orderBy(desc(leadsTable.createdAt));

    res.json(
      leads.map((l) => ({
        id: l.id,
        name: l.name,
        email: l.email,
        company: l.company,
        clientType: l.clientType,
        message: l.message,
        sourcePage: l.sourcePage,
        createdAt: l.createdAt.toISOString(),
      }))
    );
  } catch (err) {
    req.log.error({ err }, "Failed to fetch leads");
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

export default router;
