interface IPaciente{
    getId(): string;
    addMedico(iMedico: IMedico);
    removeMedico(idMedico: string);
    getDiagnostico(): string;
    removeMedico(idMedico: string);
    getMedicos(): Map<string, IMedico>
}

class Paciente implements IPaciente{

    private diagnostico: string;
    private medicos: Map<string, IMedico>
    private id: string;

    constructor(id: string, diagnostico: string) {
        this.diagnostico = diagnostico
        this.medicos = new Map()
        this.id = id
    }

    addMedico(iMedico: IMedico) {
        if (this.medicos.has(iMedico.getId()))  {
            return;
        }

        this.medicos.set(iMedico.getId(), iMedico)
    }

    removeMedico(idMedico: string){
        if(!this.medicos.has(idMedico)){
            return;
        }
        this.medicos.delete(idMedico);
    }

    getDiagnostico(): string{
        return this.diagnostico
    }

    getId(){
        return this.id
    }

    getMedicos(): Map<string, IMedico> {
        return this.medicos;
    }


    toString() {
        let saida = ""
        saida += `Pac: ${this.id}:${this.diagnostico} `;
        saida += "Meds: ["
        for (let medico in this.medicos.keys) {
            saida += `${medico}. `
        }
        saida += "]";
        return saida;
    }
}

interface IMedico{
    addPaciente(iPaciente: IPaciente);
    getClasse(): string;
    getId(): string;
    getPacientes();
    removerPaciente(idPaciente: string);
}

class Medico implements IMedico{
    private id: string;
    private classe: string;
    private pacientes: Map<string, IPaciente>

    constructor(id: string, classe: string){
        this.pacientes = new Map()
        this.id = id
        this.classe = classe;
    }

    addPaciente(iPaciente: IPaciente) {
        if(this.pacientes.has(iPaciente.getId())){
            return
        }
        this.pacientes.set(iPaciente.getId(), iPaciente)
    }

    getClasse() {
        return this.classe
    }
    
    getId() {
        return this.id
    }

    getPacientes() {
        return this.pacientes;
    }

    removerPaciente(idPaciente: string) {
        if(!this.pacientes.has(idPaciente)){
            return;
        }
        this.pacientes.delete(idPaciente);
    }
    
}

class Hospital{
    private pacientes: Map<string, IPaciente>
    private medicos: Map<string, IMedico>

    constructor(){
        this.pacientes = new Map()
        this.medicos = new Map()
    }

    addMedico(iMedico: Medico){
        if (this.medicos.has(iMedico.getId())){
            return;
        }
        this.medicos.set(iMedico.getId(), iMedico);
    }

    addPaciente(iPaciente: IPaciente){
        if(this.pacientes.has(iPaciente.getId())){
            return;
        }
        this.pacientes.set(iPaciente.getId(), iPaciente);
    }

    removerMedico(idMedico: string){
        if(!this.medicos.has(idMedico)){
            return;
        }
        this.medicos.delete(idMedico)
    }
    
    removerPaciente(idPaciente: string){
        if(!this.pacientes.has(idPaciente)){
            return;
        }
        this.pacientes.delete(idPaciente)
    }

    vincular(idMedico: string, idPaciente: string) {
        if (this.medicos.has(idMedico) && this.pacientes.has(idPaciente)) {
            let IPaciente: IPaciente = this.pacientes.get(idPaciente);
            let IMedico: IMedico = this.medicos.get(idMedico);

            this.medicos.get(idMedico).addPaciente(IPaciente);
            this.pacientes.get(idMedico).addMedico(IMedico);
        }
    }

    toString() {
        let saida = ""
        saida += `Pac: ${this.id}:${this.diagnostico} `;
        saida += "Meds: ["
        for (let medico in this.medicos.keys) {
            saida += `${medico}. `
        }
        saida += "]";
        return saida;
    }

}

