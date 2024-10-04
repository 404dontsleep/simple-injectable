import SimpleInjectable, { IInjectable } from "./index";

// Define types
// Method 1
type Inject1 = { url: string } & IInjectable<"Inject-1">;

// Method 2
interface Inject2 extends IInjectable<"Inject-2"> {
  datadome: string;
}
// Merge types
type Inject = Inject1 | Inject2;

class Tester extends SimpleInjectable<Inject> {
  async test() {
    const data: Inject = {
      url: "Hello World",
      injectName: "Inject-1",
    };
    console.log(data);
    await this.onInjectable(data);
    console.log(data);
    // {url: "2", injectName: "Inject-1"}
  }
}
const tester = new Tester();
const handleInject = async (injectable: Inject) => {
  if (injectable.injectName === "Inject-1") {
    injectable.url = "2";
  }
};

async function test() {
  tester.addInjectListener(handleInject);
  await tester.test();
  // {url: "Hello World", injectName: "Inject-1"}
  // {url: "2", injectName: "Inject-1"}

  tester.removeInjectListener(handleInject);
  await tester.test();
  // {url: "Hello World", injectName: "Inject-1"}
  // {url: "Hello World", injectName: "Inject-1"}
}
test();
