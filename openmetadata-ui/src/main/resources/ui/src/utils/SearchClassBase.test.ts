/*
 *  Copyright 2024 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {
  COMMON_DROPDOWN_ITEMS,
  CONTAINER_DROPDOWN_ITEMS,
  DASHBOARD_DATA_MODEL_TYPE,
  DASHBOARD_DROPDOWN_ITEMS,
  DATA_PRODUCT_DROPDOWN_ITEMS,
  GLOSSARY_DROPDOWN_ITEMS,
  ML_MODEL_DROPDOWN_ITEMS,
  PIPELINE_DROPDOWN_ITEMS,
  SEARCH_INDEX_DROPDOWN_ITEMS,
  TABLE_DROPDOWN_ITEMS,
  TAG_DROPDOWN_ITEMS,
  TOPIC_DROPDOWN_ITEMS,
} from '../constants/AdvancedSearch.constants';
import { EntityType } from '../enums/entity.enum';
import { SearchIndex } from '../enums/search.enum';
import { SearchClassBase } from './SearchClassBase';

describe('SearchClassBase', () => {
  let searchClassBase: SearchClassBase;

  beforeEach(() => {
    searchClassBase = new SearchClassBase();
  });

  it('should return the correct search index for each entity type', () => {
    const searchIndexMapping =
      searchClassBase.getEntityTypeSearchIndexMapping();

    expect(searchIndexMapping[EntityType.ALL]).toEqual(SearchIndex.ALL);
    expect(searchIndexMapping[EntityType.TABLE]).toEqual(SearchIndex.TABLE);
    expect(searchIndexMapping[EntityType.PIPELINE]).toEqual(
      SearchIndex.PIPELINE
    );
    expect(searchIndexMapping[EntityType.DASHBOARD]).toEqual(
      SearchIndex.DASHBOARD
    );
    expect(searchIndexMapping[EntityType.MLMODEL]).toEqual(SearchIndex.MLMODEL);
    expect(searchIndexMapping[EntityType.TOPIC]).toEqual(SearchIndex.TOPIC);
    expect(searchIndexMapping[EntityType.CONTAINER]).toEqual(
      SearchIndex.CONTAINER
    );
    expect(searchIndexMapping[EntityType.TAG]).toEqual(SearchIndex.TAG);
    expect(searchIndexMapping[EntityType.GLOSSARY_TERM]).toEqual(
      SearchIndex.GLOSSARY_TERM
    );
    expect(searchIndexMapping[EntityType.STORED_PROCEDURE]).toEqual(
      SearchIndex.STORED_PROCEDURE
    );
    expect(searchIndexMapping[EntityType.DASHBOARD_DATA_MODEL]).toEqual(
      SearchIndex.DASHBOARD_DATA_MODEL
    );
    expect(searchIndexMapping[EntityType.SEARCH_INDEX]).toEqual(
      SearchIndex.SEARCH_INDEX
    );
    expect(searchIndexMapping[EntityType.DATABASE_SERVICE]).toEqual(
      SearchIndex.DATABASE_SERVICE
    );
    expect(searchIndexMapping[EntityType.MESSAGING_SERVICE]).toEqual(
      SearchIndex.MESSAGING_SERVICE
    );
    expect(searchIndexMapping[EntityType.DASHBOARD_SERVICE]).toEqual(
      SearchIndex.DASHBOARD_SERVICE
    );
    expect(searchIndexMapping[EntityType.PIPELINE_SERVICE]).toEqual(
      SearchIndex.PIPELINE_SERVICE
    );
    expect(searchIndexMapping[EntityType.MLMODEL_SERVICE]).toEqual(
      SearchIndex.ML_MODEL_SERVICE
    );
    expect(searchIndexMapping[EntityType.STORAGE_SERVICE]).toEqual(
      SearchIndex.STORAGE_SERVICE
    );
    expect(searchIndexMapping[EntityType.SEARCH_SERVICE]).toEqual(
      SearchIndex.SEARCH_SERVICE
    );
    expect(searchIndexMapping[EntityType.DOMAIN]).toEqual(SearchIndex.DOMAIN);
    expect(searchIndexMapping[EntityType.DATA_PRODUCT]).toEqual(
      SearchIndex.DATA_PRODUCT
    );
    expect(searchIndexMapping[EntityType.DATABASE]).toEqual(
      SearchIndex.DATABASE
    );
    expect(searchIndexMapping[EntityType.DATABASE_SCHEMA]).toEqual(
      SearchIndex.DATABASE_SCHEMA
    );
  });

  it('should return dropdown item based on entity type', () => {
    const tableItems = searchClassBase.getDropDownItems(SearchIndex.TABLE);
    const topicItems = searchClassBase.getDropDownItems(SearchIndex.TOPIC);
    const dashboardItems = searchClassBase.getDropDownItems(
      SearchIndex.DASHBOARD
    );
    const pipelineItems = searchClassBase.getDropDownItems(
      SearchIndex.PIPELINE
    );
    const searchIndexItems = searchClassBase.getDropDownItems(
      SearchIndex.SEARCH_INDEX
    );
    const mlmodelsItems = searchClassBase.getDropDownItems(SearchIndex.MLMODEL);
    const containerItems = searchClassBase.getDropDownItems(
      SearchIndex.CONTAINER
    );
    const storedProcedureItems = searchClassBase.getDropDownItems(
      SearchIndex.STORED_PROCEDURE
    );
    const dashboardDataModelItems = searchClassBase.getDropDownItems(
      SearchIndex.DASHBOARD_DATA_MODEL
    );

    const glossaryTermItems = searchClassBase.getDropDownItems(
      SearchIndex.GLOSSARY_TERM
    );
    const tagItems = searchClassBase.getDropDownItems(SearchIndex.TAG);
    const dataProductItems = searchClassBase.getDropDownItems(
      SearchIndex.DATA_PRODUCT
    );
    const databaseItems = searchClassBase.getDropDownItems(
      SearchIndex.DATABASE
    );
    const databaseSchemaItems = searchClassBase.getDropDownItems(
      SearchIndex.DATABASE_SCHEMA
    );

    expect(tableItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...TABLE_DROPDOWN_ITEMS,
    ]);

    expect(topicItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...TOPIC_DROPDOWN_ITEMS,
    ]);
    expect(dashboardItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...DASHBOARD_DROPDOWN_ITEMS,
    ]);
    expect(pipelineItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...PIPELINE_DROPDOWN_ITEMS,
    ]);

    expect(mlmodelsItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...ML_MODEL_DROPDOWN_ITEMS,
    ]);

    expect(searchIndexItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...SEARCH_INDEX_DROPDOWN_ITEMS,
    ]);

    expect(containerItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...CONTAINER_DROPDOWN_ITEMS,
    ]);
    expect(storedProcedureItems).toEqual([...COMMON_DROPDOWN_ITEMS]);

    expect(dashboardDataModelItems).toEqual([
      ...COMMON_DROPDOWN_ITEMS,
      ...DASHBOARD_DATA_MODEL_TYPE,
    ]);
    expect(glossaryTermItems).toEqual(GLOSSARY_DROPDOWN_ITEMS);

    expect(tagItems).toEqual(TAG_DROPDOWN_ITEMS);

    expect(dataProductItems).toEqual(DATA_PRODUCT_DROPDOWN_ITEMS);

    expect(databaseItems).toEqual(COMMON_DROPDOWN_ITEMS);
    expect(databaseSchemaItems).toEqual(COMMON_DROPDOWN_ITEMS);
  });

  it('should return empty dropdown item based if index not related to explore items', () => {
    const dropdownItem = searchClassBase.getDropDownItems(SearchIndex.DOMAIN);

    expect(dropdownItem).toEqual([]);
  });
});
