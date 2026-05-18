/**
 * makecode I2C OLED 128x64 Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

//% weight=20 color=#0855AA icon="O" block="OLED12864_I2C-6"
namespace OLED12864_I2C {
  let font: number[] = [];
  font[0] = 0x0022d422;
  font[1] = 0x0022d422;
  font[2] = 0x0022d422;
  font[3] = 0x0022d422;
  font[4] = 0x0022d422;
  font[5] = 0x0022d422;
  font[6] = 0x0022d422;
  font[7] = 0x0022d422;
  font[8] = 0x0022d422;
  font[9] = 0x0022d422;
  font[10] = 0x0022d422;
  font[11] = 0x0022d422;
  font[12] = 0x0022d422;
  font[13] = 0x0022d422;
  font[14] = 0x0022d422;
  font[15] = 0x0022d422;
  font[16] = 0x0022d422;
  font[17] = 0x0022d422;
  font[18] = 0x0022d422;
  font[19] = 0x0022d422;
  font[20] = 0x0022d422;
  font[21] = 0x0022d422;
  font[22] = 0x0022d422;
  font[23] = 0x0022d422;
  font[24] = 0x0022d422;
  font[25] = 0x0022d422;
  font[26] = 0x0022d422;
  font[27] = 0x0022d422;
  font[28] = 0x0022d422;
  font[29] = 0x0022d422;
  font[30] = 0x0022d422;
  font[31] = 0x0022d422;
  font[32] = 0x00000000;
  font[33] = 0x000002e0;
  font[34] = 0x00018060;
  font[35] = 0x00afabea;
  font[36] = 0x00aed6ea;
  font[37] = 0x01991133;
  font[38] = 0x010556aa;
  font[39] = 0x00000060;
  font[40] = 0x000045c0;
  font[41] = 0x00003a20;
  font[42] = 0x00051140;
  font[43] = 0x00023880;
  font[44] = 0x00002200;
  font[45] = 0x00021080;
  font[46] = 0x00000100;
  font[47] = 0x00111110;
  font[48] = 0x0007462e;
  font[49] = 0x00087e40;
  font[50] = 0x000956b9;
  font[51] = 0x0005d629;
  font[52] = 0x008fa54c;
  font[53] = 0x009ad6b7;
  font[54] = 0x008ada88;
  font[55] = 0x00119531;
  font[56] = 0x00aad6aa;
  font[57] = 0x0022b6a2;
  font[58] = 0x00000140;
  font[59] = 0x00002a00;
  font[60] = 0x0008a880;
  font[61] = 0x00052940;
  font[62] = 0x00022a20;
  font[63] = 0x0022d422;
  font[64] = 0x00e4d62e;
  font[65] = 0x000f14be;
  font[66] = 0x000556bf;
  font[67] = 0x0008c62e;
  font[68] = 0x0007463f;
  font[69] = 0x0008d6bf;
  font[70] = 0x000094bf;
  font[71] = 0x00cac62e;
  font[72] = 0x000f909f;
  font[73] = 0x000047f1;
  font[74] = 0x0017c629;
  font[75] = 0x0008a89f;
  font[76] = 0x0008421f;
  font[77] = 0x01f1105f;
  font[78] = 0x01f4105f;
  font[79] = 0x0007462e;
  font[80] = 0x000114bf;
  font[81] = 0x000b6526;
  font[82] = 0x010514bf;
  font[83] = 0x0004d6b2;
  font[84] = 0x0010fc21;
  font[85] = 0x0007c20f;
  font[86] = 0x00744107;
  font[87] = 0x01f4111f;
  font[88] = 0x000d909b;
  font[89] = 0x00117041;
  font[90] = 0x0008ceb9;
  font[91] = 0x0008c7e0;
  font[92] = 0x01041041;
  font[93] = 0x000fc620;
  font[94] = 0x00010440;
  font[95] = 0x01084210;
  font[96] = 0x00000820;
  font[97] = 0x010f4a4c;
  font[98] = 0x0004529f;
  font[99] = 0x00094a4c;
  font[100] = 0x000fd288;
  font[101] = 0x000956ae;
  font[102] = 0x000097c4;
  font[103] = 0x0007d6a2;
  font[104] = 0x000c109f;
  font[105] = 0x000003a0;
  font[106] = 0x0006c200;
  font[107] = 0x0008289f;
  font[108] = 0x000841e0;
  font[109] = 0x01e1105e;
  font[110] = 0x000e085e;
  font[111] = 0x00064a4c;
  font[112] = 0x0002295e;
  font[113] = 0x000f2944;
  font[114] = 0x0001085c;
  font[115] = 0x00012a90;
  font[116] = 0x010a51e0;
  font[117] = 0x010f420e;
  font[118] = 0x00644106;
  font[119] = 0x01e8221e;
  font[120] = 0x00093192;
  font[121] = 0x00222292;
  font[122] = 0x00095b52;
  font[123] = 0x0008fc80;
  font[124] = 0x000003e0;
  font[125] = 0x000013f1;
  font[126] = 0x00841080;
  font[127] = 0x0022d422;

  let _I2CAddr = 0;
  let _screen = pins.createBuffer(1025);
  let _buf2 = pins.createBuffer(2);
  let _buf3 = pins.createBuffer(3);
  let _buf4 = pins.createBuffer(4);
  let _ZOOM = 1;

  function cmd1(d: number) {
    let n = d % 256;
    pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
  }

  function cmd2(d1: number, d2: number) {
    _buf3[0] = 0;
    _buf3[1] = d1;
    _buf3[2] = d2;
    pins.i2cWriteBuffer(_I2CAddr, _buf3);
  }

  function cmd3(d1: number, d2: number, d3: number) {
    _buf4[0] = 0;
    _buf4[1] = d1;
    _buf4[2] = d2;
    _buf4[3] = d3;
    pins.i2cWriteBuffer(_I2CAddr, _buf4);
  }

  function set_pos(col: number = 0, page: number = 0) {
    cmd1(0xb0 | page); // page number
    let c = col * (_ZOOM + 1);
    cmd1(0x00 | c % 16); // lower start column address
    cmd1(0x10 | (c >> 4)); // upper start column address
  }

  // clear bit
  function clrbit(d: number, b: number): number {
    if (d & (1 << b)) d -= 1 << b;
    return d;
  }

  /**
   * set pixel in OLED
   * @param x is X alis, eg: 0
   * @param y is Y alis, eg: 0
   * @param color is dot color, eg: 1
   */
  //% blockId="OLED12864_I2C_PIXEL" block="oled画点 位置 x:%x|y:%y|color:%color"
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% weight=95 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function pixel(x: number, y: number, color: number = 1) {
    let page = y >> 3;
    let shift_page = y % 8;
    let ind = x * (_ZOOM + 1) + page * 128 + 1;
    let b = color
      ? _screen[ind] | (1 << shift_page)
      : clrbit(_screen[ind], shift_page);
    _screen[ind] = b;
    set_pos(x, page);
    if (_ZOOM) {
      _screen[ind + 1] = b;
      _buf3[0] = 0x40;
      _buf3[1] = _buf3[2] = b;
      pins.i2cWriteBuffer(_I2CAddr, _buf3);
    } else {
      _buf2[0] = 0x40;
      _buf2[1] = b;
      pins.i2cWriteBuffer(_I2CAddr, _buf2);
    }
  }

  /**
   * show text in OLED
   * @param s is the text will be show, eg: 'abc'
   * @param x is X alis, eg: 0
   * @param y is Y alis, eg: 0
   * @param color is string color, eg: 1
   */
  //% blockId="OLED12864_I2C_SHOWSTRING" block="oled显示英文字符 %s 位置 x:%x|y:%y|color:%color"
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% weight=97 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function showString(
    s: string = 'abc',
    x: number = 0,
    y: number = 0,
    color: number = 1
  ) {
    let col = 0;
    let p = 0;
    let ind = 0;
    for (let n = 0; n < s.length; n++) {
      p = font[s.charCodeAt(n)];
      for (let i = 0; i < 5; i++) {
        col = 0;
        for (let j = 0; j < 5; j++) {
          if (p & (1 << (5 * i + j))) col |= 1 << (j + 1);
        }
        ind = (x + n) * 5 * (_ZOOM + 1) + y * 128 + i * (_ZOOM + 1) + 1;
        if (color == 0) col = 255 - col;
        _screen[ind] = col;
        if (_ZOOM) _screen[ind + 1] = col;
      }
    }
    set_pos(x * 5, y);
    let ind0 = x * 5 * (_ZOOM + 1) + y * 128;
    let buf = _screen.slice(ind0, ind + 1);
    buf[0] = 0x40;
    pins.i2cWriteBuffer(_I2CAddr, buf);
  }

  /**
   * show a number in OLED
   * @param num is the number will be show, eg: 123
   * @param x is X alis, eg: 0
   * @param y is Y alis, eg: 0
   * @param color is number color, eg: 1
   */
  //% blockId="OLED12864_I2C_NUMBER" block="oled显示数字 %num 位置 x:%x|y:%y|color:%color"
  //% num.defl=123
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% weight=98 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function showNumber(
    num: number = 123,
    x: number = 0,
    y: number = 0,
    color: number = 1
  ) {
    showString(x, y, num.toString(), color);
  }

  /**
   * draw a horizontal line
   * @param x is X alis, eg: 0
   * @param y is Y alis, eg: 0
   * @param len is the length of line, eg: 0
   * @param color is line color, eg: 1
   */
  //% blockId="OLED12864_I2C_HLINE" block="oled画横线 位置 x:%x|y:%y|length:%len|color:%color"
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% len.defl=10
  //% weight=94 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function hline(x: number, y: number, len: number = 10, color: number = 1) {
    for (let i = x; i < x + len; i++) pixel(i, y, color);
  }

  /**
   * draw a vertical line
   * @param x is X alis, eg: 0
   * @param y is Y alis, eg: 0
   * @param len is the length of line, eg: 0
   * @param color is line color, eg: 1
   */
  //% blockId="OLED12864_I2C_VLINE" block="oled画竖线 位置 x:%x|y:%y|length:%len|color:%color"
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% len.defl=10
  //% weight=93 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function vline(x: number, y: number, len: number = 10, color: number = 1) {
    for (let i = y; i < y + len; i++) pixel(x, i, color);
  }

  /**
   * draw a rectangle
   * @param x1 is X alis, eg: 0
   * @param y1 is Y alis, eg: 0
   * @param x2 is X alis, eg: 60
   * @param y2 is Y alis, eg: 30
   * @param color is line color, eg: 1
   */
  //% blockId="OLED12864_I2C_RECT" block="oled画空心矩形 位置 x:%x|y:%y|width:%width|height:%height|color:%color"
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% width.min=0 width.max=127 width.defl=10
  //% height.min=0 height.max=63 height.defl=10
  //% weight=91 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function rect(
    x: number,
    y: number,
    width: number = 10,
    height: number = 10,
    color: number = 1
  ) {
    let x1 = x
    let y1 = y
    let x2 = x1 + width
    let y2 = x1 + height
    if (x1 > x2) x1 = [x2, (x2 = x1)][0];
    if (y1 > y2) y1 = [y2, (y2 = y1)][0];
    hline(x1, y1, x2 - x1 + 1, color);
    hline(x1, y2, x2 - x1 + 1, color);
    vline(x1, y1, y2 - y1 + 1, color);
    vline(x2, y1, y2 - y1 + 1, color);
  }

  /**
   * invert display
   * @param d true: invert / false: normal, eg: true
   */
  //% blockId="OLED12864_I2C_INVERT" block="invert display %d"
  //% weight=48 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function invert(d: boolean = true) {
    let n = d ? 0xa7 : 0xa6;
    cmd1(n);
  }

  /**
   * draw / redraw screen
   */
  //% blockId="OLED12864_I2C_DRAW" block="draw"
  //% weight=49 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function draw() {
    set_pos();
    pins.i2cWriteBuffer(_I2CAddr, _screen);
  }

  /**
   * clear screen
   */
  //% blockId="OLED12864_I2C_CLEAR" block="oled清空屏幕"
  //% weight=99 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function clear() {
    _screen.fill(0);
    _screen[0] = 0x40;
    draw();
  }

  /**
   * turn on screen
   */
  //% blockId="OLED12864_I2C_ON" block="oled打开屏幕"
  //% weight=50 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function on() {
    cmd1(0xaf);
  }

  /**
   * turn off screen
   */
  //% blockId="OLED12864_I2C_OFF" block="oled关闭屏幕"
  //% weight=50 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function off() {
    cmd1(0xae);
  }

  /**
   * zoom mode
   * @param d true zoom / false normal, eg: true
   */
  //% blockId="OLED12864_I2C_ZOOM" block="zoom %d"
  //% weight=47 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function zoom(d: boolean = true) {
    _ZOOM = d ? 1 : 0;
    cmd2(0xd6, _ZOOM);
  }
  /**
   * draw an outlined circle
   * @param x is the x coordinate of the center, eg: 0
   * @param y is the y coordinate of the center, eg: 0
   * @param r is the radius of the circle, eg: 0
   * @param color is the color of the circle, eg: 1
   */
  //% blockId="OLED12864_I2C_OUTLINEDCIRCLE"
  //% block="oled画实心圆形 位置 x:%x|y:%y|radius:%r|color:%color"
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% r.defl=10
  //% weight=88 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function outlinedCircle(x: number, y: number, r: number = 10, color: number = 1) {
      const step = 1 / r;
      for (let theta = 0; theta < 2 * Math.PI; theta += step) {
          let xPos = x + Math.round(r * Math.cos(theta));
          let yPos = y + Math.round(r * Math.sin(theta));
          pixel(xPos, yPos, color);
      }
  }
  /**
   * draw a filled circle
   * @param x is the x coordinate of the center, eg: 0
   * @param y is the y coordinate of the center, eg: 0
   * @param r is the radius of the circle, eg: 0
   * @param color is the color of the circle, eg: 1
   */
  //% blockId="OLED12864_I2C_FILLEDCIRCLE"
  //% block="oled画空心圆形 位置 x:%x|y:%y|radius:%r|color:%color"
  //% x.min=0 x.max=127
  //% y.min=0 y.max=63
  //% r.defl=10
  //% weight=89 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function filledCircle(x: number, y: number, r: number = 10, color: number = 1) {
      for (let j = 0; j <= r; j++) {
          const step = 1 / j;
          for (let theta = 0; theta < 2 * Math.PI; theta += step) {
              let xPos = x + Math.round(j * Math.cos(theta));
              let yPos = y + Math.round(j * Math.sin(theta));
              pixel(xPos, yPos, color);
          }
      }
  }
  /**
   * OLED initialize
   * @param addr is i2c addr, eg: 60
   */
  //% blockId="OLED12864_I2C_init" block="oled初始化模块 地址 %addr"
  //% weight=100 blockGap=8
  //% parts=OLED12864_I2C trackArgs=0
  export function init(addr: number) {
    _I2CAddr = addr;
    cmd1(0xae); // SSD1306_DISPLAYOFF displayOff
    cmd1(0xa4); // SSD1306_DISPLAYALLON_RESUME displayAllon_resume
    cmd2(0xd5, 0xf0); // SSD1306_SETDISPLAYCLOCKDIV setDisplayClockDiv
    cmd2(0xa8, 0x3f); // SSD1306_SETMULTIPLEX setMultiplex
    cmd2(0xd3, 0x00); // SSD1306_SETDISPLAYOFFSET setDisplayOffSet
    cmd1(0 | 0x0); // line #SSD1306_SETSTARTLINE setStartLine
    cmd2(0x8d, 0x14); // SSD1306_CHARGEPUMP chargePump
    cmd2(0x20, 0x00); // SSD1306_MEMORYMODE memoryMode
    cmd3(0x21, 0, 127); // SSD1306_COLUMNADDR columnAddr
    cmd3(0x22, 0, 63); // SSD1306_PAGEADDR pageAddr
    cmd1(0xa0 | 0x1); // SSD1306_SEGREMAP segremap
    cmd1(0xc8); // SSD1306_COMSCANDEC comScanDec
    cmd2(0xda, 0x12); // SSD1306_SETCOMPINS setComPins
    cmd2(0x81, 0xcf); // SSD1306_SETCONTRAST setContrast
    cmd2(0xd9, 0xf1); // SSD1306_SETPRECHARGE setPreCharge
    cmd2(0xdb, 0x40); // SSD1306_SETVCOMDETECT setVComDetect
    cmd1(0xa6); // SSD1306_NORMALDISPLAY normalDisplay
    cmd2(0xd6, 0); // zoom off
    cmd1(0xaf); // SSD1306_DISPLAYON displayOn
    clear();
    _ZOOM = 0;
  }
  


    /**
     * expand func
     */
    export function getScreen(): Buffer {
        return _screen;
    }
    export function setScreen(screen: Buffer): void {
        _screen = screen;
    }
    export function getAddr(): number {
        return _I2CAddr;
    }
    export function getZoom(): number {
        return _ZOOM;
    }
    export function drawByArr1024(arr1024: number[]): void {
        _screen[0] = 0x40; //64
        //完整的1024数据覆盖
        //或 部分数据覆盖
        //或 判断性覆盖（合并）
        for (let i = 0; i < 1024; i++) {
           _screen[i + 1] = arr1024[i];
        //    if(arr1024[i] == 0){
        //        _screen[i + 1] = 0x00;
        //    }
        }
        // _screen.unshift(0x40);
        pins.i2cWriteBuffer(_I2CAddr, _screen);
        // const arrTmp = [0x40];
        // arrTmp.push(..arr1024)
        // pins.i2cWriteBuffer(_I2CAddr, arrTmp);
        // let _screen = pins.createBuffer(1025);
        // _screen[0] = 0x40;
        // _screen[1] = 0xff;
        // _screen[2] = 0x01;
        // pins.i2cWriteBuffer(60, _screen);
    }
    export function drawByScreen1025(): void {
        //pins.i2cWriteBuffer(_I2CAddr, _screen);
        //e.g.
        //getScreen()
        //setScreen()
        //draw()
    }
    export function clearRectArea(xStart: number, yStart: number, width: number, height: number, color: number = 1): void {
        for (let y = yStart; y < yStart + height; y++) {
            for (let x = xStart; x < xStart + width; x++) {
                setPixelData(x, y, color);
            }
        }
        //e.g.
        //clearRectArea()
        //draw()
    }
    export function setPixelData(x: number, y: number, color: number = 1) {
        let page = y >> 3;
        let shift_page = y % 8;
        let ind = x * (0 + 1) + page * 128 + 1;
        let b = color ? _screen[ind] | (1 << shift_page) : clrbit(_screen[ind], shift_page);
        _screen[ind] = b;
        //e.g.
        //clear()
        //setPixelData()
        //draw()
    }
    export function setOutlinedCircleData(x: number, y: number, r: number, color: number = 1) {
        const step = 1 / r;
        for (let theta = 0; theta < 2 * Math.PI; theta += step) {
            let xPos = x + Math.round(r * Math.cos(theta));
            let yPos = y + Math.round(r * Math.sin(theta));
            setPixelData(xPos, yPos, color);
        }
    }
    export function setStringData(
      x: number,
      y: number,
      s: string,
      color: number = 1
    ) {
      let col = 0;
      let p = 0;
      let ind = 0;
      for (let n = 0; n < s.length; n++) {
        p = font[s.charCodeAt(n)];
        for (let i = 0; i < 5; i++) {
          col = 0;
          for (let j = 0; j < 5; j++) {
            if (p & (1 << (5 * i + j))) col |= 1 << (j + 1);
          }
          ind = (x + n) * 5 * (_ZOOM + 1) + y * 128 + i * (_ZOOM + 1) + 1;
          if (color == 0) col = 255 - col;
          _screen[ind] = col;
          if (_ZOOM) _screen[ind + 1] = col;
        }
      }
      _screen[0] = 0x40;
      //e.g.
      //clear()
      //setStringData()
      //draw()
    }
    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    export function oledDrawImgWithPixels12864(im: Image): void {
        for (let y = 0; y < 64; y++) {
            for (let x = 0; x < 128; x++) {
                if (im.pixel(x, y)) {
                    setPixelData(x, y, 1)
                }
            }
        }
        draw()
    }



    /**
     * expand block
     */
    //% block="oled画实心矩形 位置 x:$xStart|y:$yStart|width:$width|height:$height|color:$color"
    //% xStart.min=0 xStart.max=127
    //% yStart.min=0 yStart.max=63
    //% width.defl=10 height.defl=10 color.defl=1
    //% weight=90
    export function oledDrawRectAreaClean(xStart: number, yStart: number, width: number = 10, height: number = 10, color: number = 1): void {
        clearRectArea(xStart, yStart, width, height, color)
        draw()
    }
    /**
     * 生成两点之间的直线坐标，支持点间隔（步长）
     * @param x0 起点 X
     * @param y0 起点 Y
     * @param x1 终点 X
     * @param y1 终点 Y
     * @param step 点间隔（每隔 step 个像素取一个点，默认 1）
     * @returns 坐标数组 {x,y}[]
     */
    export function getLinePoints(
        x0: number,
        y0: number,
        x1: number,
        y1: number,
        step: number = 1
    ): Array<{ x: number, y: number }> {
        const points: Array<{ x: number, y: number }> = [];
        let counter = 0; // 间隔计数

        let dx = Math.abs(x1 - x0);
        let dy = -Math.abs(y1 - y0);
        const sx = x0 < x1 ? 1 : -1;
        const sy = y0 < y1 ? 1 : -1;
        let err = dx + dy;

        while (true) {
            // 按间隔取点
            if (counter % step === 0) {
                points.push({ x: x0, y: y0 });
            }
            counter++;

            // 到达终点退出
            if (x0 === x1 && y0 === y1) break;

            const e2 = 2 * err;
            if (e2 >= dy) {
                err += dy;
                x0 += sx;
            }
            if (e2 <= dx) {
                err += dx;
                y0 += sy;
            }
        }

        return points;
    }
    /**
     * 画直线（带间隔）+ 返回坐标
     * @param x0 起点
     * @param y0 起点
     * @param x1 终点
     * @param y1 终点
     * @param step 间隔
     * @param color 颜色 1亮 0灭
     */
    export function drawLineAndReturn(
        x0: number, y0: number,
        x1: number, y1: number,
        step: number = 1,
        color: number = 1
    ): Array<{ x: number, y: number }> {
        const pts = getLinePoints(x0, y0, x1, y1, step);
        // 实际画点
        for (const p of pts) {
            setPixelData(p.x, p.y, color)
        }
        draw()
        return pts;
        // serial.writeLine(`x=${pts.x}, y=${pts.y}`);
    }
    //% block="oled画直线 起点位置 x0:$x0|y0:$y0|终点位置 x1:$x1|y1:$y1|color:$color|step:$step"
    //% x0.min=0 x0.max=127
    //% y0.min=0 y0.max=63
    //% x1.min=0 x1.max=127 x1.defl=10
    //% y1.min=0 y1.max=63 y1.defl=10
    //% step.defl=0
    //% color.defl=1
    //% weight=92
    export function drawLine(
        x0: number, y0: number,
        x1: number = 10, y1: number = 10,
        step: number = 1,
        color: number = 1
    ): void {
        const pts = getLinePoints(x0, y0, x1, y1, step);
        // 实际画点
        for (const p of pts) {
            setPixelData(p.x, p.y, color)
        }
        draw()
    }



    //todo:滚动、旋转
}
