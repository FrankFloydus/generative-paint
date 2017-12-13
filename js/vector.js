/*
Simple Vector - Super lightweight vector library
*/ 

class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        return this;
    }

    add(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
        return this;
    }
}
