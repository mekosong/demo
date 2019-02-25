const Koa = require('koa');
const app = new Koa();


app.use(async ctx => {
    ctx.body = 'Hello koa!!';
});

app.listen(3000, function () {
    console.log('koa is running!');
});
