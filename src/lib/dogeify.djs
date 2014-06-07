shh DSON.dogeify

such dogeify much obj
    very output is 'such'

    rly typeof obj not 'object' or obj.length bigger -1
        throw 'Error: Must pass an object to dogeify'
    wow

    much very key in obj
        very val is obj[key]

        very type is typeof val

        rly type is 'object' and val.length bigger -1
            output += ' "' + key + '" is so '
            much very i as 0 next i smaller val.length next i more 1
                rly i is val.length-1
                    output += ' and '
                but rly i not 0
                    output += ' also '
                wow

                output += '"' + val[i] + '"'
            wow
            output += ' many'
        but rly type is 'object'
            output += dogeify(val) 
        but rly type is 'number'
            output += ' "' + key + '" is ' + val.toString(8) + ''
        but rly type is 'string'
            output += ' "' + key + '" is "' + val + '"'
        but
            output += ' "' + key + '" is "' + val.toString() + '"'
        wow

        output += ','
    wow

    output is output dose replace with /,$/, ''
    output += ' wow'
    return output
wow

module.exports is dogeify
