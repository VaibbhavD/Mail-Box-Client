import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InboxEmail from "./InboxEmail";

describe("InboxEmail component", () => {
  it("should call DeleteHandler when delete icon is clicked", () => {
    const email = {
      id: 1,
      Email: "example@example.com",
      Subject: "Test Subject",
      Time: "12:00 PM",
      db: false,
    };

    const deleteHandlerMock = jest.fn();

    const { getByTestId } = render(<InboxEmail email={email} />);
    const deleteIcon = getByTestId("delete-icon");

    fireEvent.click(deleteIcon);

    expect(deleteHandlerMock).toHaveBeenCalled();
  });
});
