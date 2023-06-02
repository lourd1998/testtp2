const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;
const sinon = require('sinon');
const validaCuil = require('../src/validacionCuil');

describe('validaCuil', () => {

  it('debería retornar true para un CUIL válido', () => {
    expect(validaCuil('20-12345678-3')).to.be.true;
  })

  it('debería retornar false para un CUIL inválido', () => {
    assert.strictEqual(validaCuil('20-12345678-0'), false);
    validaCuil('20-12345678-0').should.be.false;
    expect(validaCuil('20-12345678-0')).to.be.false;
  });


  it('debería retornar false para un CUIL inválido', () => {
    expect(validaCuil('20-12345678-0')).to.be.false;
  });

  it('Cuit no puede incluir espacios', function() {
    assert.strictEqual(validaCuil('20 35377388 0'), false);
    expect(validaCuil('20 35377388 0')).to.be.false;
  });

  it('cuil con un caracter de más es invalido', function() {
    assert.strictEqual(validaCuil('203537738800'), false);
    expect(validaCuil('203537738800')).to.be.false;
  });

  it('Cuil es invalido si incluye letra', function() {
    assert.equal(validaCuil('20123456789a'), false);
    expect(validaCuil('20123456789a')).to.be.false;
    });

  it('debería llamar al método split', () => {
    const splitSpy = sinon.spy(String.prototype, 'split');
    validaCuil('20-12345678-9');
    sinon.assert.calledWith(splitSpy, '');
    splitSpy.restore();
  });
  
  it('debería llamar al método map', () => {
    const mapSpy = sinon.spy(Array.prototype, 'map');
    validaCuil('20-12345678-9');
    sinon.assert.calledOnce(mapSpy);
    mapSpy.restore();
  });
  
});
