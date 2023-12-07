import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { maxDistance } from "./main.ts";

Deno.test(function Test01() {
  assertEquals(typeof maxDistance(""), "number");
});

Deno.test(function Test02() {
  assertEquals(maxDistance(">>*<"), 2);
});

Deno.test(function Test03() {
  assertEquals(maxDistance("<<<<<"), 5);
});

Deno.test(function Test04() {
  assertEquals(maxDistance(">***>"), 5);
});

Deno.test(function Test05() {
  assertEquals(maxDistance("**********"), 10);
});

Deno.test(function Test06() {
  assertEquals(maxDistance("<<**>>"), 2);
});
