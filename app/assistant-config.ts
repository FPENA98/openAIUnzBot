export let assistantId = "asst_YZSb8coCdNqaRxj9nn1meOoP"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
