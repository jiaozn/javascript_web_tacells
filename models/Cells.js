const db = require('../db');

module.exports = db.defineModel('cell', {
    id: {
        type: db.INTEGER,
        primaryKey: true
    },

    mcc: db.STRING,
    mnc: db.STRING,
    tac: db.STRING,
    cluster: db.STRING,
    zhanhao: db.STRING,
    enodebname: db.STRING,
    enodebtype: db.STRING,
    lngb: db.STRING,
    latb: db.STRING,
    cellid: db.STRING,
    sectorid: db.STRING,
    cellname: db.STRING,
    pindian: db.STRING,
    celltype: db.STRING,
    lngc: db.STRING,
    latc: db.STRING,
    pci: db.STRING,
    prach: db.STRING,
    azi: db.STRING,
    mtilt: db.STRING,
    etilt: db.STRING,
    anthigh: db.STRING,
    antgain: db.STRING,
    waimao: db.STRING,
    anttype: db.STRING,
    hbwd: db.STRING,
    vbwd: db.STRING,
    srhigh: db.STRING,
    covertype: db.STRING,
    pantgain: db.STRING,
    rfpower: db.STRING,
    rspower: db.STRING,
    timeslotsw: db.STRING,
    nbpreused1: db.STRING,
    fpsafedis: db.STRING,
    jizhanleixing: db.STRING,
    quyu: db.STRING,
    scene3: db.STRING,
    scene25: db.STRING,
    ctime: db.DATE,
    updatetime: db.DATE
}, 'tacells');