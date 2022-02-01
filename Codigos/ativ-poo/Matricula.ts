class Aluno {
    private id: string;
    private m_discp: Map<string, Disciplina>

    constructor(id: string) {
        this.m_discp = new Map()
        this.id = id
    }

    matricula(disc: Disciplina): void {
        this.m_discp.set(disc.getId(), disc)
    }

    desmatricular(id: string): void {
        this.m_discp.delete(id)

    }

    getM_discp(): Map<string, Disciplina> {
        return this.m_discp;
    }

    getDisciplinas(): Disciplina[] {
        let disciplinas = [];
        for (let values of this.m_discp.values()) {
            disciplinas.push(values);
        }
        return disciplinas;
    }

    getId(): string {
        return this.id
    }
}

class Disciplina{
    private id: string;
    private m_alunos: Map<string, Aluno>

    constructor(id: string){
        this.m_alunos = new Map()
        this.id = id
    }

    matricula(aluno: Aluno): void {
        this.m_alunos.set(aluno.getId(), aluno)
    
    }
    
    desmatricular(id: string) : void {
        this.m_alunos.delete(id)
    }

    getAlunos(): Aluno[]{
        let alunos = [];
        for(let values of this.m_alunos.values()){
            alunos.push(values);
        }
        return alunos;
    }

    getId(): string {
        return this.id
    }

    getM_alunos(): Map<string, Aluno> {
        return this.m_alunos
    }
}

class Sistema{
    m_discp: Map<string, Disciplina>
    m_alunos: Map<string, Aluno>

    constructor(){
        this.m_discp = new Map()
        this.m_alunos = new Map()
    }

    addAluno(id:string): void {
        this.m_alunos.set(id, new Aluno(id))
    }
    
    addDisciplina(id:string): void {
        this.m_discp.set(id, new Disciplina(id))
    }

    matricularAluno(idAluno: string, idDisciplina: string): void {
        if (!this.m_alunos.has(idAluno)) {
            console.log("Aluno não existe")
            return;
        }

        if (!this.m_discp.has(idDisciplina)) {
            console.log("Disciplina não existe")
            return
        }

        let disciplina =  this.m_discp.get(idDisciplina);
        let aluno = this.m_alunos.get(idAluno);
        if (aluno !== undefined) {
            disciplina?.getM_alunos()?.set(idAluno, aluno)
        }
    }

    desmatricularAluno(idAluno: string, idDisciplina: string): void {
        if(!this.m_alunos.has(idAluno)){
            console.log("Aluno não existe")
            return;
        }
        
        if(!this.m_discp.has(idDisciplina)){
            console.log("Disciplina não existe")
            return
        }
        
        let disciplina = this.m_discp.get(idDisciplina);
        let aluno = this.m_alunos.get(idAluno);
        if( aluno !== undefined){
            console.log(`${idAluno} foi desmatriculado`)
            disciplina?.getM_alunos()?.delete(idAluno)
        }
    }

}

const sistema = new Sistema();
sistema.addAluno("Hyago")
sistema.addAluno("Davi")
sistema.addAluno("Chico")
sistema.addDisciplina("POO")
sistema.addDisciplina("Dizenhu")
sistema.matricularAluno("Chico", "Dizenhu")
sistema.matricularAluno("Davi", "POO")
sistema.desmatricularAluno("Chico", "Dizenhu")


console.log(sistema.m_alunos)
console.log(sistema.m_discp)


