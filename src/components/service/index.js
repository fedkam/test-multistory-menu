import { ReactComponent as IconFlatRack } from '../../access/icon/containers/flatRack.svg';
import { ReactComponent as IconOpenTop } from '../../access/icon/containers/openTop.svg';
import { ReactComponent as IconTank } from '../../access/icon/containers/tank.svg';
import { ReactComponent as IconThermo } from '../../access/icon/containers/thermo.svg';
import { ReactComponent as IconUniversal } from '../../access/icon/containers/universal.svg';
import { ReactComponent as IconChemical } from '../../access/icon/chemical.svg';
import { ReactComponent as IconFood } from '../../access/icon/food.svg';
import { ReactComponent as IconGas } from '../../access/icon/gas.svg';


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
            icon: IconChemical
        },
        {
            _id: 302,
            recId: 3,
            label: 'Перевозка сжиженных газов',
            icon: IconFood
        },
        {
            _id: 303,
            recId: 3,
            label: 'Перевозка химических грузов',
            icon: IconGas
        }
    ];

    getMenuList = () => {
        return this.DATA_FIRSTLEVEL_MENU;
    };

    getSubmenu = (name) => {
        let foundMenuItem = this.DATA_FIRSTLEVEL_MENU.find((el) => el.name == name);
        if(foundMenuItem === undefined) return false;
        let submenu = this.DATA_SECONDLEVEL_MENU.filter((item) => item.recId && (item.recId === foundMenuItem._id)); //проверяем сущ .recId далее сравниваеем перееданный и текущий)
        if (submenu.length) {
            return submenu;
        } else {
            return false;
        }
    }
}
