const http = require('http');



describe('Test root path', () => {
    test('Should respond with status code 200', (done) => {
        http.get('http://localhost:3000/', (res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test business detail path', () => {
    test('Should respond with status code 200', (done) => {
        http.get('http://localhost:3000/yelpDetail', (res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test business list path', () => {
    test('Should respond with status code 200', (done) => {
        http.get('http://localhost:3000/yelpListAuto', (res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});