import View from './View.js'
import validateDate from '../helpers/validateDate.js'
export default class HomeView extends View{
    _template(data){
        if(data.length === 0){
            this._element.innerHTML = 'Nothing here.'
        } else{
            return this._element.innerHTML = `
            <div class="arrow arrow-right bg-gray-800">
                <a href="attendance.html" class="text-gray-200">&rarr;</a>
                <p>Cadastrar</p>
            </div>

                <section class="table bg-gray-800">
                    <table>
                        <thead>
                            <tr class="bg-gray-800">
                                <th class="text-base text-pink-600 px-4 py-6">Nome do Cliente</th>
                                <th class="text-base text-pink-600 px-4 py-6">Pet</th>
                                <th class="text-base text-pink-600 px-4 py-6">Serviço</th>
                                <th class="text-base text-pink-600 px-4 py-6">Status do Serviço</th>
                                <th class="text-base text-pink-600 px-4 py-6">Observações</th>
                                <th class="text-base text-pink-600 px-4 py-6">Data de Atendimento</th>
                                <th class="text-base text-pink-600 px-4 py-6">Data de Entrega</th>
                                <th class="text-base text-pink-600 px-4 py-6">Editar Atendimento</th>
                                <th class="text-base text-pink-600 px-4 py-6">Deletar Atendimento</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${data.map(
                                cliente => `
                                <tr class="bg-gray-700">
                                    <td class="text-sm text-gray-500 px-4 py-4 font-medium">${cliente.cliente}</td>
                                    <td class="text-sm text-gray-500 px-4 py-4 font-medium">${cliente.pet}</td>
                                    <td class="text-sm text-gray-500 px-4 py-4 font-medium">${cliente.servico}</td>
                                    <td class="text-sm text-gray-500 px-4 py-4 font-medium ${cliente.status == 'Não concluído' ? 'text-orange-500' : 'text-green-500'}">${cliente.status}</td>
                                    <td class="text-sm text-gray-500 px-4 py-4 font-medium">${cliente.observacoes == null ? 'Nenhuma' : cliente.observacoes}</td>
                                    <td class="text-sm text-gray-500 px-4 py-4 font-medium">${validateDate(cliente, 'criacao', 'show')}</td>
                                    <td class="text-sm text-gray-500 px-4 py-4 font-medium">${validateDate(cliente, 'entrega', 'show')}</td>
                                    <td class="edit text-sm px-4 py-2 text-teal-500 font-bold" data-value="${cliente.id}"><a class="edit edited" data-value="${cliente.id}" href="user.html">Editar</a></td>
                                    <td class="delete text-sm px-4 py-2 text-red-700 font-bold" data-value="${cliente.id}"><strong class="deleted cursor-pointer" data-value="${cliente.id}">X</strong></td>
                                </tr>
                                `
                            ).join('')}
                        </tbody>
                    </table>
                </section>
            `
        }
    }
}