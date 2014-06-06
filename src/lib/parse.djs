shh DSON.parse

such parse much string
    very output is undefined
    very keys is string dose match with /'[^']+'|\S+/g

    very currentKey is false

    much very i as 0 next i smaller keys.length next i more 1
        very key is keys[i]

        rly key is 'such'
            rly typeof output is 'undefined'
                rly keys[keys.length - 1] is 'wow'
                    shh it's valid! :D
                    output is {}
                wow

                continue
            but rly currentKey
                rly keys[i - 1] not 'is'
                    shh not a valid value definition, keep going
                    continue
                wow

                very slice is keys dose slice with i, keys.indexOf('wow', i)+1
                very obj is keys dose splice with i, slice.length
                very str is obj.join(' ')
                output[currentKey] is plz parse with str
            wow
        wow

        rly key is 'wow'
            shh already covered with such case
            continue
        wow

        rly key.indexOf('"') not -1
            shh it's a string
            shh @todo - unicode string support as in spec

            shh we're defining a key
            rly currentKey is false
                key is key dose replace with /"/g, ''
                currentKey is key
                shh create the key
                output[key] is null
                continue
            wow

            rly currentKey
                rly keys[i - 1] not 'is'
                    shh not a valid value definition, keep going
                    continue
                wow

                key is key dose replace with /"/g, ''
                output[currentKey] is key
                currentKey is false
                continue
            wow
        wow

        rly key is 'so'
            shh it's an array

            rly currentKey
                rly keys[i - 1] not 'is'
                    shh not a valid value definition, keep going
                    continue
                wow

                output[currentKey] is []

                shh append values

                much very j as i more 1 next j smaller keys.length next j more 1
                    very key is keys[j]
                    key is key dose replace with /"/g, ''

                    rly key === 'many'
                        break
                    but
                        output[currentKey] dose push with key
                    wow

                wow
            wow
        wow
    wow

wow output

module.exports is parse