export function sortByDate(data: unknown[]): unknown[] {
    return data.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function domainByEnvironment(): string {
    const env = process.env.NODE_ENV;
    if (env === "production") {
        return 'https://fitvitfitness.com';
    } else {
        return 'http://localhost:3000';
    }
}