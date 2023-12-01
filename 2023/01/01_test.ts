import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { findFirstRepeated } from "./01.ts";

Deno.test(function Test01() {
  assertEquals(typeof (findFirstRepeated([2, 1, 3, 5, 3, 2])), "number");
});

Deno.test(function Test02() {
  assertEquals(findFirstRepeated([2, 1, 3, 5, 3, 2]), 3);
});

Deno.test(function Test03() {
  assertEquals(findFirstRepeated([2, 2]), 2);
});

Deno.test(function Test04() {
  assertEquals(findFirstRepeated([2, 4, 3, 5, 1]), -1);
});

Deno.test(function Test05() {
  assertEquals(findFirstRepeated([1]), -1);
});

Deno.test(function Test06() {
  assertEquals(findFirstRepeated([]), -1);
});

Deno.test(function Test07() {
  assertEquals(findFirstRepeated([10, 20, 30]), -1);
});

Deno.test(function Test08() {
  assertEquals(findFirstRepeated([5, 1, 2, 3, 2, 5, 1]), 2);
});

Deno.test(function Test09() {
  assertEquals(findFirstRepeated([12, 20, 30, 11, 20, 12]), 20);
});
