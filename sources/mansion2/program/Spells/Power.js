/**
 * Created by ralphy on 18/02/17.
 */
/**
 * Created by ralphy on 24/01/17.
 * @class MANSION.SPELLS.Power
 */

O2.createClass('MANSION.SPELLS.Power', {
    run: function(g) {
        var ep = g.oLogic.getEffectProcessor();
        var ePower = new Effect.Bonus('resistance');
        var p = g.oLogic.getPlayerSoul();
        ePower.setSource(p);
        ePower.setTarget(p);
        ePower.setLevel(40);
        ePower.setDuration(60);
        ep.applyEffect(ePower);
        g.fadeIn('rgba(250, 100, 100, 0.5)', 1000);
        g.fadeIn('rgba(250, 200, 100, 0.75)', 500);
    }
});