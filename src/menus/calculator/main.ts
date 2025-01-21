import { settings } from "#settings";
import { brBuilder, createEmbed, createRow } from "@magicyan/discord";
import {
  ButtonBuilder,
  ButtonStyle,
  codeBlock,
  inlineCode,
  type InteractionReplyOptions,
} from "discord.js";

export function calculatorMainMenu<R>(display: string = "\u200b"): R {
  const embed = createEmbed({
    color: settings.colors.default,
    fields: [
      {
        name: "Display",
        value: codeBlock(display),
      },
    ],
  });

  const embedInfo = createEmbed({
    color: settings.colors.default,
    description: brBuilder(
      `${inlineCode("+")} Adicionar`,
      `${inlineCode("-")} Remover`,
      `${inlineCode("C")} Limpar o display`,
      `${inlineCode("=")} Somar o display`,
      `${inlineCode("/")} Dividir`,
      `${inlineCode("*")} Multiplicar`
    ),
  });

  const components = [
    createRow(
      new ButtonBuilder({
        customId: "calculator/one",
        label: "1",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/two",
        label: "2",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/three",
        label: "3",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/multiply",
        label: "*",
        style: ButtonStyle.Secondary,
      })
    ),
    createRow(
      new ButtonBuilder({
        customId: "calculator/four",
        label: "4",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/five",
        label: "5",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/six",
        label: "6",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/divide",
        label: "/",
        style: ButtonStyle.Secondary,
      })
    ),
    createRow(
      new ButtonBuilder({
        customId: "calculator/seven",
        label: "7",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/eight",
        label: "8",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/nine",
        label: "9",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/clear",
        label: "C",
        style: ButtonStyle.Danger,
      })
    ),
    createRow(
      new ButtonBuilder({
        customId: "calculator/plus",
        label: "+",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/zero",
        label: "0",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/minus",
        label: "-",
        style: ButtonStyle.Primary,
      }),
      new ButtonBuilder({
        customId: "calculator/sum",
        label: "=",
        style: ButtonStyle.Success,
      })
    ),
  ];

  return {
    flags,
    embeds: [embedInfo, embed],
    components,
  } satisfies InteractionReplyOptions as R;
}
