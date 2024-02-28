player.onChat("a", function () {
    agent.teleportToPlayer()
})
loops.forever(function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != LAPIS_ORE) {
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            if (agent.detect(AgentDetection.Block, LEFT)) {
                agent.turn(RIGHT_TURN)
            } else {
                agent.turn(LEFT_TURN)
                agent.move(FORWARD, 1)
            }
        } else {
            if (agent.detect(AgentDetection.Block, LEFT)) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
                agent.move(FORWARD, 1)
            }
        }
    }
    if (falg) {
        player.say("habe fertig!")
        falg = false
    }
})
let falg = false
falg = true
