import signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', ()=>{

    // beforeEach(function(){
    //     cy.fixture('deliver').then((result)=>{
    //         this.deliver = result
    //     })
    // })

    it('User should be deliver', function(){
        
        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)     
    })

    it('User should insert invalid document', function(){
        
        var deliver = SignupFactory.deliver()
        deliver.cpf = 'AAA01234567'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('User should insert invalid email', function(){
        
        var deliver = SignupFactory.deliver()
        deliver.email = 'teste.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function(){

        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })

    })
})