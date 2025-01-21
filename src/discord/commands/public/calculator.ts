import { createCommand } from "#base";
import { menus } from "#menus";

createCommand({
  name: "calculadora",
  description: "...",
  async run(interaction) {
    await interaction.reply(menus.calculator.main());
  },
});
