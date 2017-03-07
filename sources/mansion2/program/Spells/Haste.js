/**
 * Created by ralphy on 18/02/17.
 */
/**
 * Created by ralphy on 24/01/17.
 * @class MANSION.SPELLS.Haste
 */

O2.createClass('MANSION.SPELLS.Haste', {
    run: function(g) {
        var eHaste = new Effect.Bonus('speed');
        var p = g.oLogic.getPlayerSoul();
        eHaste.setSource(p);
        eHaste.setTarget(p);
        eHaste.setLevel(40);
        eHaste.setDuration(30);
        var ep = g.oLogic.getEffectProcessor();
        ep.applyEffect(eHaste);
        g.fadeIn('rgba(220, 220, 96, 0.75)', 500);
    }
});