import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { manufacture } from "./main.ts";

Deno.test(function Test01() {
  assertEquals(manufacture([""], "") instanceof Array, true);
});

Deno.test(function Test02() {
  assertEquals(manufacture(["tren", "oso", "pelota"], "tronesa"), [
    "tren",
    "oso",
  ]);
});

Deno.test(function Test03() {
  assertEquals(manufacture(["coche", "muñeca", "balon"], "ocmuñalb"), []);
});

Deno.test(function Test04() {
  assertEquals(manufacture(["patineta", "robot", "libro"], "nopor"), []);
});

Deno.test(function Test05() {
  assertEquals(manufacture([], "letras"), []);
});
