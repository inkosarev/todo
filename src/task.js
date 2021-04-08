import { v4 as uuid } from 'uuid'

/**
 * @class
 * @classdesc Класс представляет задачу
 */
export default class Task {
    /**
     * Возможные статусы задач
     * @type {Object}
     */
    static status = Object.freeze({
        newly: 'newly',
        inProgress: 'inProgress',
        done: 'done',
    })

    /**
     * Уникальный иденификатор задачи
     * @type {number}
     */
    id

    /**
     * Заголовок
     * @type {string}
     */
    title

    /**
     * Описание
     * @type {string}
     */
    description

    /**
     * Статус
     * @type {string}
     */
    status

    /**
     * Время создания
     * @type {number}
     */
    created

    /**
     * Создает объект задачи
     * @return {Task}
     */
    constructor() {
        this.id = uuid()
        this.title = 'Новая задача...'
        this.description = `Введите описание задачи...`
        this.status = Task.status.newly
        this.created = Date.now()
    }
}
