const MainScreen = require('./views/MainScreen');
const UserBarCode = require('./parts/UserBarCode');
const httpModule = require('http');

module.exports = {
    data() {
        return {
            loggedIn: false,
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="RzeTour">
        <GridLayout columns="50, auto, *, auto" rows="auto">
           <Image src="~/images/Rzeszow_logo.svg.png" height="40" row="0" col="0" />
           <Label text="RzeTour" fontSize="24" row="0" col="1"/>
           <Image @tap="showBarCode()" src="~/images/iconBarCodes1.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="3" v-show="loggedIn" />
        </GridLayout>
      </ActionBar>
      
      <ScrollView>
        <StackLayout v-if="!loggedIn">
            <Image class="m-20" height="80" src="~/images/Rzeszow_logo.svg.png"/>
            <Label text="RzeTour" class="h1 text-center" />
            <Button @tap="showLoginForm()" class="btn btn-primary" text="Logowanie" />
            <Button @tap="showRegisterForm()" class="btn" text="Rejestracja" />
        </StackLayout>
        <StackLayout v-else>
            <MainScreen />
        </StackLayout>
      </ScrollView>
    </Page>
  `,
    components: {
        MainScreen,
        UserBarCode
    },
    methods: {
        showLoginForm() {
            login({
                title: "Logowanie",
                message: "Wprowadź swoje dane",
                okButtonText: "Zaloguj się",
                cancelButtonText: "Anuluj",
                userName: "test",
                password: "testtest",
                // userName: "Nazwa użytkownika",
                // password: "Hasło"
            }).then(result => {
                console.log(result);
                httpModule.request({
                    url: "https://rzethon.shymi.eu/APIOauth/login",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    content: JSON.stringify({
                        name: result.userName,
                        password: result.password
                    })
                }).then((response) => {
                    const result = response.content.toJSON();
                    if (result.message === 'Zalogowano pomyślnie!') {
                        this.loggedIn = true;
                        this.jwt = result.jwt;
                    } else {
                        alert("Spróbuj ponownie");

                    }
                    console.log(result);
                }, (e) => {
                    alert("Wystąpił błąd");
                    console.log(e);
                });
            });
        },
        showRegisterForm() {
            login({
                title: "Rejestracja",
                message: "Wprowadź swoje dane",
                okButtonText: "Zerejestruj się",
                cancelButtonText: "Anuluj",
                userName: "Nazwa użytkownika",
                password: "Hasło",
            }).then(result => {
                console.log(result);
                httpModule.request({
                    url: "https://rzethon.shymi.eu/users/create",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    content: JSON.stringify({
                        name: result.userName,
                        email: result.userName + '@test.loc',
                        password: result.password,
                        confirm: result.password
                    })
                }).then((response) => {
                    const result = response.content.toJSON();
                    alert(result.message);
                    if (result.message === 'Zere pomyślnie!') {
                        this.loggedIn = true;
                        this.jwt = result.jwt;
                    }
                    console.log(result);
                }, (e) => {
                    alert("Wystąpił błąd");
                    console.log(e);
                });
            });
        },
        showBarCode() {
            this.$showModal(UserBarCode)
        },
        mounted() {
            console.log('Montowanie App');
        }
    }
};
