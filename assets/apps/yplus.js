function yPlus2Ds(form) {
    // Compute a wall spacing value 
    // for given flow conditions and a desired Y+
 
    Uinf = eval(form.Uinf.value)
    rho = eval(form.rho.value)
    L = eval(form.L.value)
    mu = eval(form.mu.value)
    yPlus = eval(form.yPlus.value)
 
    // Check the input
    // Return -1 on error
    if ( Uinf <= 0 ||
         rho <= 0 ||
         L <= 0 ||
         mu <= 0 ||
         yPlus <= 0 ) {
       form.Ds.value = -1
       return;
    }
 
    // Compute Ds
    Rex = (rho*Uinf*L)/mu
    Cf = 0.026*Math.pow(Rex,-(1.0/7.0))
    tauWall = Cf*rho*Uinf*Uinf*0.5
    Ufric = Math.sqrt(tauWall/rho)
    Ds = (yPlus*mu)/(Ufric*rho)*1000
 
    // Put results into the form
    form.Ds.value = Ds
    form.Rex.value = Rex
}