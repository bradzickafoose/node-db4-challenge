
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl.spring('name', 255)
                .notNullable()
                .unique();
        })

        .createTable('ingredients', tbl => {
            tbl.increments();

            tbl.string('name', 255)
                .notNullable();

            // Foreign Key
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
        })

        .createTable('instructions', tbl => {
            tbl.increments();

            tbl.integer('instructions_id')
                .unsigned()
                .notNullable();

            tbl.integer('step_number')
                .notNullable();

            tbl.string('instructions')
                .notNullable();

        })

        .createTable('recipe_ingredients', tbl => {
            tbl.primary({ 'recipe_id', 'ingredient_id'});

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipe');

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients');
        });


};

exports.down = function (knex) {

};
