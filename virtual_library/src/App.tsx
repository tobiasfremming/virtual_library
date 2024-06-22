import Female from "./genogram_components/Female";
import Male from "./genogram_components/Male";
import Pet from "./genogram_components/Pet";
import Preggo from "./genogram_components/Preggo";
import Unknown from "./genogram_components/Unknown";
import Canvas from "./CanvasFacade";
import CanvasFacade from "./CanvasFacade";

function App() {
  // const canvas = document.getElementById("genogram") as HTMLCanvasElement;
  // const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // ctx.beginPath();
  // ctx.fillStyle = "red";
  // ctx.strokeRect(20, 20, 150, 100);
  // ctx.fill();
  const canvas: CanvasFacade = new Canvas("genogram");
  canvas.create("genogram");
  canvas.square(20, 20, 150, 100);
  canvas.fill();
  console.log("canvas", canvas.hei);

  return (
    <>
      <Male name="John" />
      <Female name="Jane" />
      <Unknown name="Parly" />
      <Pet name="Rex" />
      <Preggo name="Mary" />
      <canvas id="genogram" width="1000" height="1000"></canvas>
    </>
  );
}

export default App;
