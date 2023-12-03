import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { findNaughtyStep } from "./main.ts";

Deno.test(function Test01() {
  assertEquals(typeof (findNaughtyStep("", "")), "string");
});

Deno.test(function Test02() {
  assertEquals(findNaughtyStep("abcd", "abcde"), "e");
});

Deno.test(function Test03() {
  assertEquals(findNaughtyStep("xxxx", "xxoxx"), "o");
});

Deno.test(function Test04() {
  assertEquals(findNaughtyStep("stepfor", "stepor"), "f");
});

Deno.test(function Test05() {
  assertEquals(findNaughtyStep("iiiii", "iiiii"), "");
});
