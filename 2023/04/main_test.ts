import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { decode } from "./main.ts";

Deno.test(function Test01() {
  assertEquals(typeof (decode("")), "string");
});

Deno.test(function Test02() {
  assertEquals(decode("hola (odnum)"), "hola mundo");
});

Deno.test(function Test03() {
  assertEquals(decode("(olleh) (dlrow)!"), "hello world!");
});

Deno.test(function Test04() {
  assertEquals(decode("sa(u(cla)atn)s"), "santaclaus");
});

Deno.test(function Test05() {
  assertEquals(decode("((nta)(sa))"), "santa");
});
