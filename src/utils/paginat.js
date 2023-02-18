import _ from 'lodash'

export function paginate(items, pageNumer, pageSize){
    const startIndex = (pageNumer -1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();

}