import View from './View.js'
import validateDate from '../helpers/validateDate.js'
export default class CustomerView extends View{
    _template(data){
        document.title = data[0].cliente
        return this._element.innerHTML = `
            <div class="arrow arrow-left bg-gray-800"><a href="index.html" class="text-gray-200">&larr;</a></div>

            <section class="table bg-gray-800">
                <table>
                    <thead>
                        <tr>
                            <th class="text-base text-pink-600 px-4 py-6">Nome do Cliente</th>
                            <th class="text-base text-pink-600 px-4 py-6">Pet</th>
                            <th class="text-base text-pink-600 px-4 py-6">Serviço</th>
                            <th class="text-base text-pink-600 px-4 py-6">Status do Serviço</th>
                            <th class="text-base text-pink-600 px-4 py-6">Observações</th>
                            <th class="text-base text-pink-600 px-4 py-6">Data de Atendimento</th>
                            <th class="text-base text-pink-600 px-4 py-6">Data de Entrega</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${data.map(
                            cliente => `
                                
                                <tr class="bg-gray-700">
                                    <td class="text-sm text-gray-500 px-4 py-5 font-medium">${cliente.cliente}</td>
                                    <td class="text-sm text-gray-500 px-4 py-5 font-medium">${cliente.pet}</td>
                                    <td class="text-sm text-gray-500 px-4 py-5 font-medium">${cliente.servico}</td>
                                    <td><input class="status placeholder-gray-200" type="text" placeholder="Ex: Não concluído" value="${cliente.status}"></td>
                                    <td><input class="observacoes placeholder-gray-200" type="text" placeholder="Ex: Nenhuma" value="${cliente.observacoes == null || cliente.observacoes == "" ? 'Nenhuma' : cliente.observacoes}"></td>
                                    <td class="text-sm text-gray-500 px-4 py-5 font-medium">${validateDate(cliente, 'criacao', 'show')}</td>
                                    <td><input class="date" type="datetime-local" min="${validateDate(cliente, 'entrega', 'post')}" value="${validateDate(cliente, 'entrega', 'post')}" required ></td>
                                </tr>

                            `
                        ).join('')}
                    </tbody>
                </table>
            </section>

            <section class="form">
                <form class="form" action="/index.html" method="patch">
                    <input class="submit px-2 py-2 bg-gray-800 text-gray-200 font-medium" type="submit" value="Modificar Atendimento">
                </form>
            </section>
            `
    }
}