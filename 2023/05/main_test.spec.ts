import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { cyberReindeer } from "./main.ts";

Deno.test(function Test01() {
  assertEquals(cyberReindeer("", 0) instanceof Array, true);
});

Deno.test(function Test02() {
  assertEquals(cyberReindeer("S..|...|..", 10), [
    "S..|...|..",
    ".S.|...|..",
    "..S|...|..",
    "..S|...|..",
    "..S|...|..",
    "...S...*..",
    "...*S..*..",
    "...*.S.*..",
    "...*..S*..",
    "...*...S..",
  ]);
});

Deno.test(function Test03() {
  assertEquals(cyberReindeer("S.|.", 4), [
    "S.|.",
    ".S|.",
    ".S|.",
    ".S|.",
  ]);
});

Deno.test(function Test04() {
  assertEquals(cyberReindeer("S.|.|.", 7), [
    "S.|.|.",
    ".S|.|.",
    ".S|.|.",
    ".S|.|.",
    ".S|.|.",
    "..S.*.",
    "..*S*.",
  ]);
});

Deno.test(function Test05() {
  assertEquals(cyberReindeer("S.|..", 6), [
    "S.|..",
    ".S|..",
    ".S|..",
    ".S|..",
    ".S|..",
    "..S..",
  ]);
});

Deno.test(function Test06() {
  assertEquals(cyberReindeer("S.|.|.|......|.||.........", 8), [
    "S.|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    "..S.*.*......*.**.........",
    "..*S*.*......*.**.........",
    "..*.S.*......*.**.........",
  ]);
});
