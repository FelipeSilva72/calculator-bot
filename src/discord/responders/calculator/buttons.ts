import { createResponder, ResponderType } from "#base";
import { Calculator } from "#class";
import { menus } from "#menus";
import { createEmbed } from "@magicyan/discord";
import { evaluate } from "mathjs";

createResponder({
  customId: "calculator/:action",
  types: [ResponderType.Button],
  cache: "cached",
  async run(interaction, { action }) {
    await interaction.deferUpdate();

    const { message } = interaction;
    const embed = createEmbed({ from: message, fromIndex: 1 });

    const calculator = new Calculator();
    const display = clearFormatDisplay(
      embed.fields.get(0)?.value ?? ""
    ).trimEnd();

    switch (action) {
      case "one": {
        const newDisplay = `${display} 1`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "two": {
        const newDisplay = `${display} 2`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "three": {
        const newDisplay = `${display} 3`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "four": {
        const newDisplay = `${display} 4`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "five": {
        const newDisplay = `${display} 5`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "six": {
        const newDisplay = `${display} 6`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "seven": {
        const newDisplay = `${display} 7`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "eight": {
        const newDisplay = `${display} 8`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "nine": {
        const newDisplay = `${display} 9`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "zero": {
        const newDisplay = `${display} 0`;
        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "plus": {
        const display = embed.fields.get(0)?.value as string;
        const input = clearFormatDisplay(display);
        const newDisplay = calculator.operator(input, "+");

        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "minus": {
        const display = embed.fields.get(0)?.value as string;
        const input = clearFormatDisplay(display);
        const newDisplay = calculator.operator(input, "-");

        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "clear": {
        await interaction.editReply(menus.calculator.main());
        return;
      }
      case "sum": {
        const result = evaluate(formatToSum(display));
        await interaction.editReply(menus.calculator.main(result));
        return;
      }
      case "multiply": {
        const display = embed.fields.get(0)?.value as string;
        const input = clearFormatDisplay(display);
        const newDisplay = calculator.operator(input, "*");

        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
      case "divide": {
        const display = embed.fields.get(0)?.value as string;
        const input = clearFormatDisplay(display);
        const newDisplay = calculator.operator(input, "/");

        await interaction.editReply(menus.calculator.main(newDisplay));
        return;
      }
    }
  },
});

function clearFormatDisplay(display: string) {
  return display.replace(/`{1,3}(.*?)`{1,3}/g, "$1");
}

function formatToSum(display: string) {
  return display.replace(/[^0-9+\-*/.]/g, "");
}
