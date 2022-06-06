# apache2-nodejs

Apache2 Web Server with reverse proxy for Node.js. This repo is for
[Belajar Jaringan Komputer untuk Pemula](https://www.dicoding.com/academies/387)
course submission from [Dicoding Academy](https://www.dicoding.com/).

### Prerequisites

You need linux environment or WSL on Windows to run this repo.

1. [WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
    ```
    wsl --install
    wsl --install -d Ubuntu-20.04
    ```
2. [Git](https://git-scm.com/downloads)
    ```
    $ sudo apt-get install git
    ```
3. [Node.js](https://nodejs.org/en/)
    ```
    $ sudo apt-get install nodejs
    ```
4. [Apache2](https://httpd.apache.org/download.cgi)
    ```
    $ sudo apt-get install apache2
    ```

### How to run

1. Clone this repo
    ```
    $ git clone https://github.com/NaufalK25/apache2-nodejs.git
    ```
2. Install dependencies
    ```
    $ npm i
    ```
3. Copy the `config/000-default.conf` to `/etc/apache2/sites-available/000-default.conf`
    ```
    $ sudo cp config/000-default.conf /etc/apache2/sites-available/000-default.conf
    ```
4. Copy the `config/port.conf` to `/etc/apache2/ports.conf`
    ```
    $ sudo cp config/port.conf /etc/apache2/ports.conf
    ```
5. Start apache2
    ```
    $ sudo service apache2 start
    ```
6. Run the server
    ```
    $ npm start
    ```
