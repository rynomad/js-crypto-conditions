'use strict'

const assert = require('chai').assert
const cc = require('..')

describe('{{suite}}', function () {
{{#cases}}
  describe('{{name}}', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('{{conditionUri}}')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, '{{conditionUri}}')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{{json}}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex'), Buffer.from('{{fingerprintContents}}', 'base64').toString('hex'))
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('{{conditionUri}}')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex'), Buffer.from('{{conditionBinary}}', 'base64').toString('hex'))
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('{{conditionUri}}')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, '{{conditionUri}}')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{{json}}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex'), Buffer.from('{{fulfillment}}', 'base64').toString('hex'))
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{{json}}')).getConditionUri()

      assert.equal(generatedCondition, '{{conditionUri}}')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('{{conditionBinary}}', 'base64'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, '{{conditionUri}}')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri('{{fulfillment}}')
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex'), Buffer.from('{{fulfillment}}', 'base64').toString('hex'))
    })
  })
{{/cases}}
})
