import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza o título da lista de tarefas", () => {
  render(<App />);
  expect(screen.getByText(/lista de tarefas/i)).toBeInTheDocument();
});
