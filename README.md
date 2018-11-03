# hackthemidlands2k18

[HackTheMidlands 2018](http://hackthemidlands.co.uk)

## Development

Create a file called `.env` with the following variables:

```env
NEXMO_KEY=X
NEXMO_SECRET=X
TEST_NUMBER=X
```

You can also use any other config methods supported by [`python-decouple`](https://github.com/henriquebastos/python-decouple)

To create a virtual environment and install deps, run:

```bash
pipenv shell
pipenv install
```

`app.py` currently just contains some test script stuff
