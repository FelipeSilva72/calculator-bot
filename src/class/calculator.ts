export class Calculator {
  public operator(display: string, operator: string) {
    return `${display.trimEnd()} ${operator} `;
  }
}
