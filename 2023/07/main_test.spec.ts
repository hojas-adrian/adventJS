import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { drawGift } from "./main.ts";

Deno.test(function Test01() {
  assertEquals(
    typeof drawGift(0, ""),
    "string",
  );
});

Deno.test(function Test02() {
  assertEquals(
    drawGift(4, "+"),
    "   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n",
  );
});

Deno.test(function Test03() {
  assertEquals(
    drawGift(5, "*"),
    "    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n",
  );
});

Deno.test(function Test04() {
  assertEquals(
    drawGift(1, "^"),
    "#\n",
  );
});

Deno.test(function Test05() {
  assertEquals(
    drawGift(2, "&"),
    " ##\n###\n##\n",
  );
});

Deno.test(function Test06() {
  assertEquals(
    drawGift(10, "%"),
    "         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n",
  );
});
