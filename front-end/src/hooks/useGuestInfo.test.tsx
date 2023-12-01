import { renderHook, act } from "../test-utils";
import { describe, expect, it } from "vitest";
import { useGuestInfo } from "./useGuestInfo";
import { GuestInfoProvider } from "../context/GuestInfoContext";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <GuestInfoProvider>{children}</GuestInfoProvider>
);

describe("useGuestInfo", () => {
  it("returns the default values at first", () => {
    const { result } = renderHook(useGuestInfo, { wrapper });
    const defaultValues = {
      numOfApartment: 1,
      numOfAdult: 1,
      numOfChildren: 0,
    };

    expect(result.current.searchInfo).toEqual(defaultValues);
  }),

  it("increases the number of guests", () => {
    const { result } = renderHook(useGuestInfo, { wrapper });
    act(() => {
      const event = {} as React.MouseEvent;
      result.current.increaseQuantity("adult", event);
    });
  
    const values = {
      numOfApartment: 2,
      numOfAdult: 1,
      numOfChildren: 0,
    };
  
    expect(result.current.searchInfo).toEqual(values);
  });
});
