import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../button";

describe("Button", () => {
  it("renders a button", () => {
    const children = "My Button";
    const onClick = jest.fn();
    render(
      <Button type="primary" data-testid="renders_a_button" onClick={onClick}>
        {children}
      </Button>
    );
    expect(screen.getByTestId("renders_a_button")).toBeInTheDocument;
    expect(screen.getByTestId("renders_a_button")).toHaveTextContent(
      "My Button"
    );
    expect(screen.getByTestId("renders_a_button")).toHaveClass("bg-brand-500");
  });

  // it("handles a click event", () => {
  //   const children = "My Button";
  //   const onClick = jest.fn();
  //   render(
  //     <Button
  //       type="primary"
  //       data-testid="handles_a_click_event"
  //       onClick={onClick}
  //     >
  //       {children}
  //     </Button>
  //   );
  //   fireEvent.click(screen.getByTestId("handles_a_click_event"));
  //   fireEvent.click(screen.getByTestId("handles_a_click_event"));
  //   expect(onClick.mock.calls.length).toEqual(2);
  // });

  // it("do not fire a click event when disabled", () => {
  //   const children = "My Button";
  //   const onClick = jest.fn();
  //   render(
  //     <Button
  //       type="primary"
  //       data-testid="prevent_click"
  //       onClick={onClick}
  //       disabled
  //     >
  //       {children}
  //     </Button>
  //   );
  //   fireEvent.click(screen.getByTestId("prevent_click"));
  //   expect(onClick.mock.calls.length).toEqual(0);
  // });

  // it("do not fire a click event when loading state", () => {
  //   const children = "My Button";
  //   const onClick = jest.fn();
  //   render(
  //     <Button type="primary" data-testid="loading" onClick={onClick} loading>
  //       {children}
  //     </Button>
  //   );
  //   fireEvent.click(screen.getByTestId("loading"));
  //   expect(onClick.mock.calls.length).toEqual(0);
  // });

  // it("Show loader when loading state", () => {
  //   const children = "My Button";
  //   render(
  //     <Button type="primary" data-testid="loading" loading>
  //       {children}
  //     </Button>
  //   );

  //   expect(screen.getByTestId("loading").children[0]).toHaveClass(
  //     "animate-spin"
  //   );
  // });

  // it("renders a dashed button", () => {
  //   const children = "My Button";
  //   const onClick = jest.fn();
  //   render(
  //     <Button type="dashed" data-testid="dashed_button" onClick={onClick}>
  //       {children}
  //     </Button>
  //   );
  //   expect(screen.getByTestId("dashed_button")).toBeInTheDocument;
  //   expect(screen.getByTestId("dashed_button")).toHaveClass("border-dashed");
  // });
});
