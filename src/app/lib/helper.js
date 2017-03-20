export default function ArrayHelper() {
    Array.prototype.sortBy = function (sort) {
        if (sort === "alpha") {
            return this.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
        } else if (sort === "pasc") {
            return this.sort((a, b) => a.price - b.price);
        } else if (sort === "pdesc") {
            return this.sort((a, b) => b.price - a.price);
        } else {
            return this;
        }
    }
    Array.prototype.unique = function () {
        let flags = {};
        return this.filter((e) => {
            if (flags[e.id]) {
                return false;
            }
            flags[e.id] = true;
            return true;
        });
    }
};