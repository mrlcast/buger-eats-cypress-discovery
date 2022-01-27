var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '41999999999',
            address: {
                postalcode: '81070000',
                street: 'Rua João Bettega',
                number: '655',
                details: 'ap 103 bloco 10',
                district: 'Portão',
                city_state: 'Curitiba/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}