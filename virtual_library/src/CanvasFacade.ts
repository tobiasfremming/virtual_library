


interface Canvas {
    create(canvas_id: string): void;
    square(pos_x: number, pos_y: number, width: number, heigh: number): void;
    circle(): void;
    triangle(): void;
    rotate(degrees: number): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
    fill(): void;
}


class CanvasFacade implements Canvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    hei: number;

    
    constructor(canvas_id: string) {
        this.canvas = document.getElementById(canvas_id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.ctx.beginPath();
        this.hei = 20;
        console.log("_________________________________________________________________")

    }

    create(canvas_id: string) {
        this.canvas = document.getElementById(canvas_id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.ctx.beginPath();

    }
    strokeRect(x: number, y: number, width: number, height: number): void {
        this.ctx.strokeRect(x, y, width, height);
    }

    square(pos_x: number, pos_y: number, width: number, heigh: number): void{
        this.ctx.rect(pos_x, pos_y, width, heigh);
    }
    circle(): void {
        this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    }
    triangle(): void { // todo: add parameters
        // draw triangle
        this.ctx.moveTo(75, 50);
        this.ctx.lineTo(100, 75);
        this.ctx.lineTo(100, 25);
        this.ctx.fill();
    }
    rotate(degrees: number): void {
        // rotate
        this.ctx.rotate(20 * Math.PI / degrees);
    }
    fill(): void {
        this.ctx.fill();
    }
}

export default CanvasFacade;













