/**
 * Represents a play queue
 * @extends Array
 */
 class SpringQueue extends Array {
    constructor() {
        // eslint-disable-next-line prefer-rest-params
        super(...arguments);
    }

    get duration() {
        return this.reduce((acc, val) => acc + val.info.length, 0);
    }

    get totalSize() {
        return this.length / 2 + (this.current ? 1 : 0);
    }

    get size() {
        return this.length / 2;
    }

    get empty() {
        return this.length / 2 < 1;
    }

    first() {
        return this ? this[0] : 0;
    }

    add(track) {
        this.push(track);
        this.splice(0, 0, track);
    }

    removeFirst() {
        return this.shift();
    }

    remove(index) {
        return this.splice(index, 1)[0];
    }

    clear() {
        return this.splice(0);
    }

    shuffle() {
        for (let i = this.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
    }
}

module.exports = SpringQueue;
