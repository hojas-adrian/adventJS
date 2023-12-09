import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { organizeGifts } from "./main.ts";

Deno.test(function Test01() {
  assertEquals(
    typeof organizeGifts(""),
    "string",
  );
});

Deno.test(function Test02() {
  assertEquals(
    organizeGifts("76a11b"),
    "[a]{a}{a}(aaaaaa){b}(b)",
  );
});

Deno.test(function Test03() {
  assertEquals(
    organizeGifts("20a"),
    "{a}{a}",
  );
});

Deno.test(function Test04() {
  assertEquals(
    organizeGifts("70b120a4c"),
    "[b]{b}{b}[a][a]{a}{a}(cccc)",
  );
});

Deno.test(function Test05() {
  assertEquals(
    organizeGifts("9c"),
    "(ccccccccc)",
  );
});

Deno.test(function Test06() {
  assertEquals(
    organizeGifts("19d51e"),
    "{d}(ddddddddd)[e](e)",
  );
});
