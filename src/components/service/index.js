import { ReactComponent as IconFlatRack } from '../../access/icon/containers/flatRack.svg';
import { ReactComponent as IconOpenTop } from '../../access/icon/containers/openTop.svg';
import { ReactComponent as IconTank } from '../../access/icon/containers/tank.svg';
import { ReactComponent as IconThermo } from '../../access/icon/containers/thermo.svg';
import { ReactComponent as IconUniversal } from '../../access/icon/containers/universal.svg';
import { ReactComponent as IconChemical } from '../../access/icon/chemical.svg';
import { ReactComponent as IconFood } from '../../access/icon/food.svg';
import { ReactComponent as IconGas } from '../../access/icon/gas.svg';


// временная заглушка, заменить на  json-server
export default class DataService {
    DATA_FIRSTLEVEL_MENU = [
        {
            _id: 1,
            name: 'flatrack',
            label: 'Flat Rack контейнеры',
            icon: IconFlatRack
        },
        {
            _id: 2,
            name: 'opentop',
            label: 'Опен топ контейнеры',
            icon: IconOpenTop
        },
        {
            _id: 3,
            name: 'tank',
            label: 'Танк-контейнеры',
            icon: IconTank
        },
        {
            _id: 4,
            name: 'thermo',
            label: 'Термо-контейнеры',
            icon: IconThermo
        },
        {
            _id: 5,
            name: 'universal',
            label: 'Универсальный контейнер',
            icon: IconUniversal
        }
    ];

    DATA_SECONDLEVEL_MENU = [
        {
            _id: 301,
            recId: 3,
            label: 'Перевозка пищевых грузов',
            icon: IconFood
        },
        {
            _id: 302,
            recId: 3,
            label: 'Перевозка сжиженных газов',
            icon: IconGas
        },
        {
            _id: 303,
            recId: 3,
            label: 'Перевозка химических грузов',
            icon: IconChemical
        }
    ];

    DATA_DROPDOWN_MENU = [
        {
            _id: 3001,
            recId: 301,
            listLink: [
                {
                    label: 'Спирты пищевые',
                    url: 'spirt'
                }, {
                    label: 'Масла',
                    url: 'oils'
                }, {
                    label: 'Соки',
                    url: 'juice'
                }, {
                    label: 'Концентраты соков',
                    url: 'concentrates'
                }, {
                    label: 'Пищевые добавки',
                    url: 'additive'
                }, {
                    label: 'Патока',
                    url: 'syrup'
                }, {
                    label: 'Виноматериал',
                    url: 'wine'
                }, {
                    label: 'Прочее',
                    url: 'other'
                }
            ]
        }, {
            _id: 3003,
            recId: 303,
            listLink: [
                {
                    label: 'Кислоты',
                    subLink: [
                        {
                            label: 'Фенол расплавленный',
                            url: 'phenol'
                        }, {
                            label: 'Олеум',
                            url: 'oils'
                        }, {
                            label: 'Хлорная кислота',
                            url: 'perchloricacid'
                        }, {
                            label: 'Нитрилакриловая кислота',
                            url: 'nitrileacrylicacid'
                        }, {
                            label: 'Серная кислота',
                            url: 'sulphuricacid'
                        }, {
                            label: 'Азотная кислота',
                            url: 'nitricacid'
                        }, {
                            label: 'Ортофосфорная кислота',
                            url: 'orthophosphoric acid'
                        }
                    ]
                },
                {
                    label: 'Щелочи',
                    subLink: []
                }, {
                    label: 'Спирты',
                    subLink: []
                }, {
                    label: 'Растворители',
                    subLink: []
                }, {
                    label: 'Соли',
                    subLink: []
                }, {
                    label: 'Эфиры',
                    subLink: []
                }, {
                    label: 'Хлориды',
                    subLink: []
                }, {
                    label: 'Прочее',
                    subLink: []
                }
            ]
        }
    ]

    getMenuList = () => {
        return this.DATA_FIRSTLEVEL_MENU;
    };

    getSubmenu = (name) => {
        let foundMenuItem = this.DATA_FIRSTLEVEL_MENU.find((el) => el.name === name);
        if (foundMenuItem === undefined) return false;
        let submenu = this.DATA_SECONDLEVEL_MENU.filter((item) => item.recId && (item.recId === foundMenuItem._id)); //проверяем сущ .recId далее сравниваеем перееданный и текущий)
        if (submenu.length) {
            return submenu;
        } else {
            return [];
        }
    };

    getDropdownList = (dropdownId) => {
        const foundDropdownList = this.DATA_DROPDOWN_MENU.find((el) => el.recId === dropdownId);
        if (foundDropdownList) {
            return foundDropdownList;
        } else {
            return {};
        }
    }

}
