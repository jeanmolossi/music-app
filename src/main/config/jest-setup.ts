import { resolve } from "path";
import "react-native-gesture-handler/jestSetup";

require(resolve(
  __dirname,
  "..",
  "..",
  "..",
  "node_modules",
  "react-native-reanimated",
  "src",
  "reanimated2",
  "jestUtils"
)).setUpTests();
